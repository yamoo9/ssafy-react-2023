const PropTypes = {
  string(props, propName, componentName) {
    // 검사 코드 작성
    const value = props[propName];
    const valueType = typeof value;
    // 전달된 prop 타입 검사 후, 타입이 일치하지 않을 경우 오류 발생
    if (valueType !== 'string') {
      throw new Error(
        `${componentName} 컴포넌트에 전달된 "${propName}" prop은 기대되는 타입이 "string"이나, 실제 전달된 타입은 "${valueType}"입니다.`
      );
    }
  },
};

export default PropTypes;
