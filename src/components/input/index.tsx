import * as Styled from './styles';

export type InputProps = {
  name: string
  type: 'text' | 'email' | 'number'
  handleGetValue: (value: string) => void
}

export const Input = ({ name, type, handleGetValue }: InputProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    handleGetValue(value);
  };

  return (
    <Styled.ConteinerInput>
      <Styled.Input onChange={handleChange} className="form__field" name={name}  type={type} placeholder={name}/>
      <Styled.Label className="form__label">
        {name}
      </Styled.Label>
    </Styled.ConteinerInput>
  );
};
