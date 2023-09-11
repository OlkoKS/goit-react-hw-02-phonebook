import { FilterContainer } from './Filter.styled';
import { InputContainer } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ handleFilter }) => {
  const handleChange = ({ target: { value } }) => handleFilter(value);
  return (
    <FilterContainer>
      <label>Find contacts by name</label>
      <InputContainer type="text" onChange={handleChange} name="filter" />
    </FilterContainer>
  );
};
