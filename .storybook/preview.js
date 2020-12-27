import { addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withProvider } from '../src/redux/store_story';
import '../src/index.css';
import '../src/components/pages/pages.mobile.scss';
import '../src/components/pages/pages.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
//라우터 연동
addDecorator(StoryRouter());
//리덕스 연동
addDecorator(withProvider);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'iphonex',
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
