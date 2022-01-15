# spacing

Spacing in Novem UI is inspired on well known frontend frameworks/libs such as Chakra UI or Tailwind.

The properties are `margin` (`m`), `marginX` (`mx`), `marginY` (`my`), `marginTop` (`mt`), `marginRight` (`mr`), `marginBottom` (`mb`), `marginLeft` (`ml`), `padding` (`p`), `paddingX`(`py`), `paddingY`(`py`), `paddingTop` (`pt`), `paddingRight` (`pr`), `paddingBottom` (`pb`), `paddingLeft` (`pl`), the values for those properties are `0, 0.5, 1, 1.2, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96` (always as numbers, anything setted as a string will be treated as a normal css value).

## Example

This component

```tsx
<Box pt={4} paddingX="2px" />
```

will produce this css

```css
padding-top: 1rem;
padding-left 2px;
padding-right: 2px;
```