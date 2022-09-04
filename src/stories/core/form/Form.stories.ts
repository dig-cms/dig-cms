import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';
import {DigFormComponent} from '../../../../projects/core/src/lib/dig-form/components/dig-form/dig-form.component';

export default {
  title: 'Core/Form',
  component: DigFormComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [DigFormComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<DigFormComponent> = (args: DigFormComponent) => ({
  props: args,
});

export const render = Template.bind({});

