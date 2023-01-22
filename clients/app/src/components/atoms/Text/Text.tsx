import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { style, ...otherProps } = props;

  return <DefaultText style={[style]} {...otherProps} />;
}

export function MonoText(props: TextProps) {
  const { style, ...otherProps } = props;

  return <Text {...otherProps} style={[style, { fontFamily: "space-mono" }]} />;
}
