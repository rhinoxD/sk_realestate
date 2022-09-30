import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button, filter } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import {filterData, getFilterValues} from '../utils/filterData';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const searchProperties = (filterValues) => {

  }
  return (
    <Flex bg='gray.100' justifyContent='center' flexWrap='wrap'>
      {filters.map((filter) => (
        <Box key={filter.queryname}>
          <Select 
            placeholder={filter.placeholder}
            w='fit conten'
            p='2'
            onChange={(e) => searchProperties({[filter.queryName]: e.target.value})}
            >

          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters;