// src/app/components/CustomDateRangePicker.tsx

import React from 'react';
import { Box, TextField } from '@mui/material';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro';
import { AdapterMoment } from '@mui/x-date-pickers-pro/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import moment, { Moment } from 'moment';

interface CustomDateRangePickerProps {
  onChange: (start: Moment | null, end: Moment | null) => void;
}

const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({ onChange }) => {
  const [value, setValue] = React.useState<DateRange<Moment>>([null, null]);

  const handleDateChange = (newValue: DateRange<Moment>) => {
    setValue(newValue);
    onChange(newValue[0], newValue[1]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateRangePicker
        startText="Start Date"
        endText="End Date"
        value={value}
        onChange={handleDateChange}
        renderInput={(startProps, endProps) => (
          <Box display="flex" alignItems="center">
            <TextField {...startProps} />
            <Box mx={2}> to </Box>
            <TextField {...endProps} />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;