# Generative Goods Grid View

A simple web application for viewing multiple Art Blocks pieces in a responsive grid layout. The application automatically adjusts the layout based on the number of pieces being displayed.

## Usage

Add token IDs as URL parameters to view multiple pieces:
```
index.html?tokens=1000000,2000000,500,0
```

The layout will automatically adjust based on the number of tokens:
- 1 piece: Centered
- 2 pieces: Side by side
- 3 pieces: Triptych
- 4 pieces: 2x2 grid
- 5 pieces: Row of 5
- 6 pieces: 2x3 grid
- 7+ pieces: Optimized grid layout 