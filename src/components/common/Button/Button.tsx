import * as S from './Button.styles';

interface Props extends Partial<S.StyleProps> {
  children: string | JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  buttonTheme?: 'grey' | 'weakBlue';
  round?: boolean;
  outline?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  width = '100%',
  height = '20px',
  fontSize = '15px',
  buttonTheme,
  round,
  outline,
  onClick,
  children,
  disabled = false,
  noPointer = false,
}: Props) => {
  return (
    <S.Button
      buttonTheme={buttonTheme}
      width={width}
      height={height}
      fontSize={fontSize}
      onClick={onClick}
      round={round}
      outline={outline}
      type={type}
      disabled={disabled}
      noPointer={noPointer}
    >
      {children}
    </S.Button>
  );
};

export default Button;
