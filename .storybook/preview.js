/** @type { import('@storybook/react').Preview } */
import 'minireset.css'
import '../styles/global.css'
import '../styles/tokens.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
