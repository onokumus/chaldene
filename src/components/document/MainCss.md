```css
// main.css
.app-side {
  width: 300px;
}
@media (min-width: 768px) {
  .app-side-opened.app-side-mini .app-side {
    width: 50px;
  }
  .app-side-opened.app-side-mini.app-side-expand-on-hover .app-side:hover {
    width: 300px;
  }
}
```