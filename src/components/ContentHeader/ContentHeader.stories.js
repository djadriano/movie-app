/* eslint-disable react/jsx-props-no-spreading */
import ContentHeader from './ContentHeader';

export default {
  title: 'Components/ContentHeader',
  component: ContentHeader,
};

const Template = (args) => <ContentHeader {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Foo',
};
