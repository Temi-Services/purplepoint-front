#!/usr/bin/env bash

# Script d'export de projet Angular vers un fichier Markdown
# Exporte uniquement les fichiers que Git considère comme non ignorés
# (même si certains fichiers ignorés ont été ajoutés par erreur à l'index)

OUTPUT_FILE="${1:-frontend-project-content.md}"

# Vérifier qu'on est dans un dépôt Git
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Erreur : Ce script doit être exécuté dans un dépôt Git." >&2
    exit 1
fi

# Se placer à la racine du dépôt
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT" || exit 1

echo "Récupération des fichiers non ignorés (même s'ils sont suivis par erreur)..."

FILES=()

# 1. Fichiers suivis, mais on exclut ceux qui correspondent au .gitignore
while IFS= read -r -d '' file; do
    # git check-ignore --no-index teste si le chemin serait ignoré s'il n'était pas suivi
    if ! git check-ignore -q --no-index "$file"; then
        FILES+=("$file")
    fi
done < <(git ls-files --cached -z)

# 2. Fichiers non suivis et non ignorés (déjà filtrés par git)
while IFS= read -r -d '' file; do
    FILES+=("$file")
done < <(git ls-files --others --exclude-standard -z)

# Trier la liste finale
IFS=$'\n' sorted=($(sort <<<"${FILES[*]}"))
unset IFS
FILES=("${sorted[@]}")

if [ ${#FILES[@]} -eq 0 ]; then
    echo "Aucun fichier non ignoré trouvé." >&2
    exit 1
fi

# Fonction de secours pour afficher l'arborescence si tree --fromfile n'est pas dispo
generate_tree() {
    local prev_parts=()
    for file in "${FILES[@]}"; do
        IFS='/' read -ra parts <<< "$file"
        local depth=${#parts[@]}
        local i=0
        while [ $i -lt ${#prev_parts[@]} ] && [ $i -lt $depth ] && [ "${parts[$i]}" = "${prev_parts[$i]}" ]; do
            ((i++))
        done
        for (( j=i; j<depth-1; j++ )); do
            printf "%*s%s/\n" $(( j*2 )) "" "${parts[$j]}"
        done
        printf "%*s%s\n" $(( (depth-1)*2 )) "" "${parts[$depth-1]}"
        prev_parts=("${parts[@]}")
    done
}

{
    echo "# Projet Angular - Contenu complet"
    echo ""
    echo "## Arborescence"
    echo ""
    echo '```'
    echo "./"

    if command -v tree &> /dev/null && tree --fromfile /dev/null &>/dev/null; then
        printf "%s\n" "${FILES[@]}" | tree --fromfile -a --noreport
    else
        generate_tree
    fi

    echo '```'
    echo ""
    echo "## Contenu des fichiers"
    echo ""

    for file in "${FILES[@]}"; do
        echo "### \`$file\`"
        echo ""

        ext="${file##*.}"
        case "$ext" in
            ts) lang="typescript" ;;
            html) lang="html" ;;
            css) lang="css" ;;
            scss) lang="scss" ;;
            less) lang="less" ;;
            js) lang="javascript" ;;
            json) lang="json" ;;
            md) lang="markdown" ;;
            yml|yaml) lang="yaml" ;;
            xml|svg) lang="xml" ;;
            sh) lang="bash" ;;
            py) lang="python" ;;
            java) lang="java" ;;
            rb) lang="ruby" ;;
            *) lang="" ;;
        esac

        echo '```'"${lang}"
        cat "$file"
        echo '```'
        echo ""
    done
} > "$OUTPUT_FILE"

echo "✅ Fichier exporté : $OUTPUT_FILE"
