import React, { FunctionComponent } from 'react'
import Button from '@novem-ui/button'
import { Close as CloseIcon, CloseSmall, Check, Attention, Info } from '@icon-park/react'

import { Wrapper, Content, Actions, IconWrapper, Text, Title, ContentWrapper, CloseWrapper } from './styles'
import { MessageTypes } from './types'

const Message: FunctionComponent<MessageTypes> = ({ title, message, onClose, button, baseColor }) => {
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
        {button && (
          <Button hierarchy="link" size="sm" onClick={button.action}>
            {button.text}
          </Button>
        )}
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
