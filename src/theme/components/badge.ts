import { mode, getColorScheme } from '../tools';

const baseStyle = {
  px: 2,
  py: 2,
  _text: { fontSize: 'xs' },
  borderRadius: 'pill',
};

function variantSolid(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.500`, `${colorScheme}.100`)(props),
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantSubtle(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    bg: mode(`${colorScheme}.300`, `${colorScheme}.700`)(props),
    _text: { color: mode(`${colorScheme}.900`, `${colorScheme}.100`)(props) },
    borderWidth: 1,
    borderColor: 'transparent',
  };
}

function variantOutline(props: Record<string, any>) {
  let colorScheme = getColorScheme(props);
  return {
    borderColor: mode(`${colorScheme}.700`, `${colorScheme}.200`)(props),
    _text: { color: mode(`${colorScheme}.700`, `${colorScheme}.200`)(props) },
    borderWidth: 1,
  };
}

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline,
};

const defaultProps = {
  variant: 'subtle',
  colorScheme: 'gray',
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
