import { render, screen } from '../../../utils/test-utils';
import Buttons from '../../../../components/Creation/Preview/Buttons';

describe('Renders any number of buttons', () => {
  test('Render 5 buttons with names from 1 to 5', () => {
    const numberOfButtons = 5;
    render(<Buttons select={() => {}} total={numberOfButtons} current={1} />);
    [...Array(numberOfButtons).keys()]
      .map((number) => number + 1)
      .forEach((number) => {
        const button = screen.getByRole('button', { name: number });
        expect(button).toBeInTheDocument();
      });
  });
});
