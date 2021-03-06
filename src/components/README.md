# π Folder Structure

    .
    βββ ...
    βββ components
    β   βββ @Icons
    β   βββ @Layout
    β   βββ Select
    β   β   βββ index.tsx                   # Export component
    β   β   βββ Select.tsx                  # Presentational component is concerned with how things look.
    β   β   βββ Select.stories.ts           # StoryBook
    β   β   βββ Select.test.tsx             # Test code
    β   β   βββ SelectContainer.tsx         # Container component is concerned with side effects(I/O, network, etc.).
    β   β   βββ SelectContainer.test.tsx    # Test code
    β   βββ SocialButton
    β   βββ ...
    βββ ...

# π€ Don't use React.FC

React.FCλ₯Ό μ¬μ©νλ κ²μ μ§μν©λλ€. λ€μκ³Ό κ°μ μ΄μ κ° μμ΅λλ€.

1. μ¬μ©νμ§ μλ νΈμ΄ λ κ°λ¨νκ³  μ΅μν©λλ€.
2. children propμ΄ μ΅μλλ‘ ν¬ν¨λμ΄ props νμμ΄ λͺννμ§ λͺ»ν©λλ€.
3. defaultPropsκ° μ μμ μΌλ‘ λμνμ§ μμ΅λλ€. defaultProps μ¬μ©νμ¬ propsμ μ΄κΈ° κ°μ μ€μ νμ¬λ κ°μ μΈμνμ§ λͺ»ν©λλ€.

λ€μκ³Ό κ°μ΄ ν¨μν μ»΄ν¬λνΈλ₯Ό μμ±ν  μ μμ΅λλ€.

```tsx
import React from 'react';

type Image = {
  src: string;
  alt: string;
};

export interface CardProps {
  image?: Image;
  title: string;
  content: string;
}

export const Card = ({ image, title, content }: CardProps) => {
  return (
    <div>
      {image && <img src={image.src} alt={image.alt} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
```

# Reference

- [Unit Testing React Components](https://medium.com/javascript-scene/unit-testing-react-components-aeda9a44aae2)
- [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [react-atomic-design](https://github.com/danilowoz/react-atomic-design)
- [Atomic Design and ReactJS](https://danilowoz.com/blog/atomic-design-with-react)
- [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
