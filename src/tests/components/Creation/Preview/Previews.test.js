import { render, screen } from '../../../utils/test-utils';
import Previews from '../../../../components/Creation/Preview/Previews';

const setup = (number) => {
  render(
    <Previews
      number={number}
      direction="next"
      hasTransitions={false}
    />,
  );
};

describe('Renders previews', () => {
  test('First preview renders', () => {
    setup(1);
    const title = screen.getByRole('heading', { name: /colorize/i });
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/artworks/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('Second preview renders', () => {
    setup(2);
    const title = screen.getByRole('heading', { name: /welcome to colorize/i });
    expect(title).toBeInTheDocument();

    const subheading = screen.getByRole('heading', { name: /free up your creation process/i });
    expect(subheading).toBeInTheDocument();
  });

  test('Third preview renders', () => {
    setup(3);
    const title = screen.getByRole('heading', { name: /the cover/i });
    expect(title).toBeInTheDocument();
  });

  test('Fourth preview renders', () => {
    setup(4);
    const title = screen.getByRole('heading', { name: /explore/i });
    expect(title).toBeInTheDocument();

    const subheading = screen.getByRole('heading', { name: /create the perfect color scheme, or be inspired by existing ones./i });
    expect(subheading).toBeInTheDocument();
  });

  test('Fifth preview renders', () => {
    setup(5);
    const title = screen.getByRole('heading', { name: /find/i });
    expect(title).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(3);
  });
});
