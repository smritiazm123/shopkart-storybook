import type { Preview } from '@storybook/nextjs-vite';
import '../src/styles/theme.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon:'paintbrush',
        items: [
          { value: 'light', title: 'Light Theme' },
          { value: 'dark', title: 'Dark Theme' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light';
      return (
        <div data-theme={theme} style={{ minHeight: '100vh', backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff' }}>
          <Story />
        </div>
      );
    }
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    
    },
    nextjs: {
      appDirectory: true,
    }
  },
};

export default preview;