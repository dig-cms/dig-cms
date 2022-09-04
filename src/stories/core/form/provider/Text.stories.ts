import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';
import {FormTextComponent} from '../../../../../projects/core/src/lib/dig-form/providers/dig/dig-form-provider/form-text/form-text.component';

export default {
  title: 'Core/Form/Text',
  component: FormTextComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      declarations: [FormTextComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<FormTextComponent> = (args: FormTextComponent) => ({
  props: args,
});

export const input = Template.bind({});

export const textArea = Template.bind({});
textArea.args = {
  rows: 4
};
