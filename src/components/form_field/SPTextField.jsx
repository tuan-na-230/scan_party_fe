import React from 'react';
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function SPTextField({ 
    field, // {name, value, onChange, onBlur}
    form, //also values, set, handle dirty, isValidate
    variant, required, fullWidth, label, autoFocus, type }) {
    const { t } = useTranslation()
    return (
        <TextField
            // autoComplete="fname"
            {...field}
            variant={variant}
            required={required}
            fullWidth={fullWidth}
            label={t(label)}
            autoFocus={autoFocus}
            error={false}
            helperText={false}
            type={type}
            
        />
    )
}

SPTextField.propTypes = {
    variant: PropTypes.string,
    required: PropTypes.bool,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
    autoFocus: PropTypes.bool,
    type: PropTypes.string
}

export default SPTextField;
