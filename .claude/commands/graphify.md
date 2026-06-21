# Graphify — Knowledge Graph from Any Folder

Transform files (code, docs, PDFs, images, markdown) into a queryable knowledge graph with community detection, audit trails, and interactive HTML visualization.

## Core Usage

```bash
graphify .                          # Process current directory
graphify <path>                     # Process specific path
graphify <path> --mode deep         # Thorough extraction with richer inferred edges
graphify <path> --update            # Incremental re-extraction of changed files
graphify <path> --cluster-only      # Rerun clustering on existing graph
graphify <path> --no-viz            # Skip visualization, report + JSON only
```

## Graph Queries

```bash
graphify query "<question>"              # BFS traversal (broad context)
graphify query "<question>" --dfs        # DFS traversal (specific paths)
graphify query "<question>" --budget N   # Limit response to N tokens
graphify path "NodeA" "NodeB"            # Shortest path between concepts
graphify explain "NodeName"              # Plain-language node explanation
```

## Output Formats

```bash
graphify <path> --svg          # Export as SVG
graphify <path> --graphml      # Export for Gephi/yEd
graphify <path> --neo4j        # Generate Cypher import file
graphify <path> --mcp          # Start MCP stdio server for agent access
graphify <path> --watch        # Auto-rebuild on file changes
```

## Add External Content

```bash
graphify add <url>                       # Fetch and add URL to corpus
graphify add <url> --author "Name"       # Tag content author
```

Supports Twitter/X, arXiv, PDFs, images, and webpages.

## Output Location

All results saved to `graphify-out/` in the processed directory:
- `graph.html` — Interactive visualization (open in browser)
- `graph.json` — Persistent queryable graph
- `GRAPH_REPORT.md` — Full audit and analysis
- `obsidian/` — Open as Obsidian vault

## Steps when user runs /graphify

1. Ask the user what path/folder to process (default: current directory `.`)
2. Run `graphify <path>` with any requested flags
3. Report what was found: node count, communities, key concepts
4. Open or share `graphify-out/graph.html` for visualization
5. Offer to run queries: `graphify query "<question>"`

## Notes
- First run builds the graph; subsequent runs with `--update` only reprocess changed files
- Edges are tagged EXTRACTED (explicit), INFERRED (semantic), or AMBIGUOUS
- 71.5x fewer tokens per query vs reading raw files on large corpora
- Requires Python 3.10+ and `graphifyy` package (`pip install graphifyy`)
