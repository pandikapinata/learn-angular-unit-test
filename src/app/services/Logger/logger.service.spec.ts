import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
  });

  it('should not have any messages at starting', () => {
    let count = service.messages.length;

    expect(count).toBe(0);
  });

  it('shouldn add the message when log is called', () => {
    service.log('message');
    expect(service.messages.length).toBe(1);
  });

  it('should clear all the message when clear is called', () => {
    service.log('message 1');
    service.log('message 2');

    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
