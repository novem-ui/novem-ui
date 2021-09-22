import React, { FunctionComponent } from 'react'
import { Close as CloseIcon } from '@icon-park/react'
import { FeedbackBadge } from '@novem-ui/badge'
import { Box } from '@novem-ui/layout'
import { Paragraph } from '@novem-ui/text'
import Button from '@novem-ui/button'

import { Content, Actions, MessageWrapper } from './styles'
import { MessageTypes } from './types'

const Message: FunctionComponent<MessageTypes> = ({ title, message, onClose, action, baseColor, variant }) => {
  const hasTitle = !!title
  const messageSize = hasTitle ? 'xs' : 'sm'

  return (
    <MessageWrapper baseColor={baseColor}>
      <Content>
        <FeedbackBadge variant={variant} mt={4.5} />
        <Box ml={4}>
          {!!hasTitle && (
            <Paragraph weight="bold" size="sm" mb={1}>
              {title}
            </Paragraph>
          )}
          <Paragraph size={messageSize}>{message}</Paragraph>
        </Box>
      </Content>
      <Actions>
        {action && action}
        {onClose && (
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        )}
      </Actions>
    </MessageWrapper>
  )
}

export default Message
