import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("BOOK A TABLE AND EARN LOYALTY POINTS AND BONUS.");
    expect(headingElement).toBeInTheDocument();
})