import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { CommonModule } from '@angular/common';
import {SandboxComponent} from '../../app/sandbox/sandbox.component';
import {SandboxModule} from '../../app/sandbox/sandbox.module';
import {DirectiveApproachModule} from '../../app/sandbox/directive-approach/directive-approach.module';

export default {
  title: 'App/Sandbox',
  component: SandboxComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      imports: [CommonModule, SandboxModule, DirectiveApproachModule],
    }),
  ],
} as Meta;

const Template: Story<SandboxComponent> = (args: SandboxComponent) => ({
  props: args,
});

export const render = Template.bind({});

