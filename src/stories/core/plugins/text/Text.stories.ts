import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';
import {TextComponent} from '../../../../../projects/core/src/plugins/text/text.component';
import {DigCmsModule} from '../../../../../projects/core/src/lib/dig-cms.module';

export default {
  title: 'Core/Plugins/Text',
  component: TextComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [TextComponent],
      imports: [CommonModule, DigCmsModule],
    }),
  ],
} as Meta;

const Template: Story<TextComponent> = (args: TextComponent) => ({
  props: args,
});

export const render = Template.bind({});

