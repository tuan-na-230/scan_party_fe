import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';
import { toast } from 'react-toastify';
import usePaginationAsync from '../../hook/usePaginationAsync';
import StoreItem from './StoreItem';
import storeService from './storeService';

export default function ListExcel({ userId }) {
    const {
        Pagination,
        loading,
        data,
    } = usePaginationAsync({ apiService: getlistExcel, pageSizeDefault: 5 });

    async function getlistExcel(params) {
        try {
            const listExcel = await storeService.getFileExcel(params, userId);
            return listExcel;
        } catch (error) {
            toast(error.response.data.message);
        }
        return null;
    }

    return (
        <Box>
            {loading &&
                <Box style={{ width: '100%', textAlign: 'center' }}>
                    <CircularProgress />
                </Box>}
            {data?.map(ele => (
                <StoreItem data={ele} />
            ))}
            <Pagination />
        </Box>
    )
}