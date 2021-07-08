import React, { FunctionComponent } from 'react'
import Button from '@novem-ui/button'

import { Wrapper, Content, Actions, Icon, Text, Title, ContentWrapper, Close } from './styles'
import { MessageTypes } from './types'

const Message: FunctionComponent<MessageTypes> = ({ title, message, onClose, button, baseColor }) => {
  return (
    <Wrapper baseColor={baseColor}>
      <Content>
        <Icon />
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
        {onClose && <Close onClick={onClose}>x</Close>}
      </Actions>
    </Wrapper>
  )
}

export default Message
