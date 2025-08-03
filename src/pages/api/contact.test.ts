import { createMocks } from 'node-mocks-http';
import handleContact from './contact';
import nodemailer from 'nodemailer';

jest.mock('nodemailer');

const mockedNodemailer = nodemailer as jest.Mocked<typeof nodemailer>;

describe('/api/contact', () => {
  it('sends an email on valid form submission', async () => {
    const sendMailMock = jest.fn().mockResolvedValueOnce({ messageId: '123' });
    mockedNodemailer.createTransport.mockReturnValue({
      sendMail: sendMailMock,
    } as any);

    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'This is a test message.',
      },
    });

    await handleContact(req, res);

    expect(sendMailMock).toHaveBeenCalledTimes(1);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Email sent successfully' });
  });

  it('returns an error for invalid data', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'John Doe',
        email: '', // Invalid email
        message: 'This is a test message.',
      },
    });

    await handleContact(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({ message: 'Invalid data' });
  });
});