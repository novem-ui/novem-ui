import React, { FunctionComponent } from 'react'
import { Close as CloseIcon, CloseSmall, Check, Attention, Info } from '@icon-park/react'

import { Wrapper, Content, Actions, IconWrapper, Text, Title, ContentWrapper, CloseWrapper } from './styles'
import { MessageTypes } from './types'

const Message: FunctionComponent<MessageTypes> = ({ title, message, onClose, action, baseColor }) => {
  const Icon = () => {
    if (baseColor === 'red') {
      return <CloseSmall />
    }

    if (baseColor === 'yellow') {
      return <Attention className="remove-circle" />
    }

    if (baseColor === 'green') {
      return <Check />
    }

    return <Info className="remove-circle" />
  }

  return (
    <Wrapper baseColor={baseColor}>
      <Content>
        <IconWrapper baseColor={baseColor}>
          <Icon />
        </IconWrapper>
        <ContentWrapper>
          {title ? (
            <>
              <Title>{message}</Title>
              <Text withTitle={!!title}>{message}</Text>
            </>
          ) : (
            <Text>{message}</Text>
          )}
        </ContentWrapper>
      </Content>
      <Actions>
        {action && action}
        {onClose && (
          <CloseWrapper onClick={onClose}>
            <CloseIcon />
          </CloseWrapper>
        )}
      </Actions>
    </Wrapper>
  )
}

export default Message
