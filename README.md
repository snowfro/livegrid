# Generative Goods Grid View

A simple web application for viewing multiple Art Blocks pieces in a responsive grid layout. The application automatically adjusts the layout based on the number of pieces being displayed.

## Usage

### Specific Tokens
Add token IDs as URL parameters to view multiple pieces:
```
index.html?tokens=1000000,2000000,500,0
```

### Random Selection
You can also randomly select pieces using the `random` and `count` parameters:
```
index.html?random=1&count=4    # Selects 4 random pieces from project 1
index.html?random=any&count=6  # Selects 6 random pieces from any project
```

Available options for `random` parameter:
- `0`: Select from Project 0 (1500 pieces)
- `1`: Select from Project 1 (1000 pieces)
- `2`: Select from Project 2 (2500 pieces)
- `any`: Select from any project

The `count` parameter determines how many pieces to display (defaults to 1 if not specified).

### Layout
The layout will automatically adjust based on the number of tokens:
- 1 piece: Centered
- 2 pieces: Side by side
- 3 pieces: Triptych
- 4 pieces: 2x2 grid
- 5 pieces: Row of 5
- 6 pieces: 2x3 grid
- 7+ pieces: Optimized grid layout 