import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';
import DateFnsUtils from '@date-io/date-fns';

function SPDatePicker({
    field, // {name, value, onChange, onBlur}
    form, //also values, set, handle dirty, isValidate
    variant, required, margin, fullWidth, label, autoFocus, type, ...otherProps }) {
    const { t } = useTranslation();
    const { name } = field
    const { isValid, errors, touched, dirty } = form;

    const handleDateChange = (value) => {
        console.log(value)
        field.value = value
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                label={t(`${label}`)}
                value={field.value}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
}

SPDatePicker.propTypes = {
    variant: PropTypes.string,
    required: PropTypes.bool,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    type: PropTypes.string
}

export default SPDatePicker;
