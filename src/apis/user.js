import httpInstance from '@/utils/http';

export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    //todo开始没有设置请求头部
    /**
     * 服务器返回了一个"服务器内部错误"的消息，并且指出不支持"Content type 'multipart/form-data;boundary=--------------------------335713016456314036737647;charset=UTF-8'"。
     * 这个错误表明服务器无法处理请求中指定的Content-Type头部，该头部指定为multipart/form-data。这通常是由于服务器端期望接收不同类型的数据，而客户端发送了不匹配的数据类型导致的。
     * 解决方法：将Content-Type设置为application/json
     * headers: {
      'Content-Type': 'application/json'
    },
     */
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      account,
      password
    }
  });
};
