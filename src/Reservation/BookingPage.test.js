import { fireEvent, render, screen } from "@testing-library/react";
import { initializeTimes } from "./BookingPage";
import { updateTimes } from "./BookingPage";

test('Test BookingPage InitializeTime and UpdateTime function', () => {
    
    const initialTime = ['','17:00','18:00','19:00',
    '20:00','21:00','22:00']
   // const InitializeTime = new InitializeTimes();
const mockCallback = jest.fn(x => 42 + x);
    const result1 = initializeTimes(initialTime);
   // InitializeTimes.initializeTimes(initialTime); 
     
    expect(result1).toBe(initialTime);

    const result2 = updateTimes(initialTime,mockCallback);

    expect (result2).toBe(initialTime);
});