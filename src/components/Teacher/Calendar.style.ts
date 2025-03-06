export const calendarStyles = `
  .rbc-calendar {
    font-family: 'Inter', sans-serif;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background: white;
  }
  
  .rbc-toolbar {
    background: #093B3B;
    color: white;
    padding: 16px;
    margin-bottom: 0;
    border-radius: 12px 12px 0 0;
  }
  
  .rbc-toolbar button {
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  .rbc-toolbar button:hover {
    background-color: rgba(232, 246, 243, 0.2);
    border-color: #E8F6F3;
  }
  
  .rbc-toolbar button.rbc-active {
    background-color: #E8F6F3;
    color: #093B3B;
    font-weight: 600;
    border-color: #E8F6F3;
  }
  
  .rbc-toolbar-label {
    font-size: 1.25rem;
    font-weight: 600;
  }
  
  .rbc-header {
    padding: 12px 6px;
    font-weight: 600;
    background-color: #E8F6F3;
    color: #093B3B;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
  
  .rbc-today {
    background-color: rgba(232, 246, 243, 0.3);
  }
  
  .rbc-event {
    border-radius: 6px;
    padding: 4px 8px;
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
  }
  
  .rbc-event:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  .rbc-event.available-slot {
    background: linear-gradient(135deg, #093B3B, #145454);
    color: white;
  }
  
  .rbc-event.booked-meeting {
    background: linear-gradient(135deg, #8B0000, #B22222);
    color: white;
  }
  
  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid #E8F6F3;
  }
  
  .rbc-month-row + .rbc-month-row {
    border-top: 1px solid #E8F6F3;
  }
  
  .rbc-time-view .rbc-header {
    border-bottom: 1px solid #E8F6F3;
  }
  
  .rbc-timeslot-group {
    border-bottom: 1px solid rgba(232, 246, 243, 0.5);
  }
  
  .rbc-time-content > * + * > * {
    border-left: 1px solid #E8F6F3;
  }
  
  .rbc-time-header-content {
    border-left: 1px solid #E8F6F3;
  }
  
  .rbc-time-header-gutter {
    background-color: #E8F6F3;
  }
  
  .rbc-off-range-bg {
    background-color: rgba(0, 0, 0, 0.03);
  }
  
  .rbc-date-cell {
    padding: 6px;
    text-align: center;
    font-weight: 500;
  }
  
  .rbc-date-cell.rbc-now {
    font-weight: 700;
    color: #093B3B;
  }
  
  .rbc-btn-group {
    display: flex;
    gap: 6px;
  }
`;
