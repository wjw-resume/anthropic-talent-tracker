rm -rf docs && ng build --output-path docs --base-href /anthropic-talent-tracker/ && cp -r docs/browser/ docs/ && rm -rf docs/browser && cp docs/index.html docs/404.html
