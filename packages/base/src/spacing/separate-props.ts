import { SpacingProps } from '../types'

const separateSpacingProps = <T = Record<string, any>>(props: SpacingProps & T) => {
  const {
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    ...restProps
  } = props

  const spacingProps: SpacingProps = {
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  }

  const typedSpacingProps: Omit<T, keyof SpacingProps> = restProps

  return { spacingProps, props: typedSpacingProps }
}

export default separateSpacingProps
