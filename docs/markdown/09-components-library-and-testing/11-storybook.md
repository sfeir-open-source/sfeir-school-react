<!-- .slide: class="transition bg-pink" -->

# Storybook

##==##

<!-- .slide: class="with-code" -->

# Storybook

![center](./assets/images/storybook.png)

##==##

# Write a Story

<!-- .slide: class="with-code" -->

```TypeScript [1-2|3-4|6|16-26|30-43]
import { Meta } from '@storybook/react';
import { makeStyles, shorthands, Text, Display } from '@fluentui/react-components';
import textDescriptionMd from './TextDescription.md';
import textBestPracticesMd from './TextBestPractices.md';

export const Default = () => <Text>This is an example of the Text component's usage.</Text>;

const useFontStyles = makeStyles({
  container: {
    ...shorthands.gap('16px'),
    display: 'flex',
    flexDirection: 'column',
  },
});

export const Font = () => {
  const styles = useFontStyles();

  return (
    <div className={styles.container}>
      <Text font="base">This is the default font</Text>
      <Text font="numeric">This is numeric font</Text>
      <Text font="monospace">This is monospace font</Text>
    </div>
  );
};

// ...

export default {
  title: 'Components/Text',
  component: Text,
  subcomponents: {
    Presets: Display,
  },
  parameters: {
    docs: {
      description: {
        component: [textDescriptionMd, textBestPracticesMd].join('\n'),
      },
    },
  },
} as Meta;
```

<!-- .element: class="big-code" -->
