// --------------------------------------------------------------------------
// template literal

{
  const koreanFoods: {
    // 타입 지정
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  } = {
    caption: "한식 메뉴",
    rows: [
      { headline: "뚝배기 불고기", content: "8,000원" },
      { headline: "스팸치즈볶음밥", content: "7,500원" },
      { headline: "불고기낙지덮밥", content: "9,000원" },
    ],
  };

  function run(): void {
    // 타입스크립트는 반환값이 없을 떼 void
    let rendredResult = printTableHTML(koreanFoods);

    //  압축된 형태로 데이터를 뽑는 방법
    rendredResult = removeSpaceString(rendredResult);
    console.log(rendredResult);
    // return undefined;
  }

  function removeSpaceString(data: string): string {
    return data
      .replace(/(\s+<$|>\s+)/g, ($1) => {
        if (/\s+<$/.test($1)) {
          return "<";
        } else if (/>\s+/.test($1)) {
          return ">";
        } else {
          return "";
        }
      })
      .trim();
  }

  function printTableHTML(data: {
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  }): string {
    return `
      <table class="table">
        <caption class="sr-only">${data.caption}</caption>
        ${data.rows
          .map(
            (item) =>
              `
              <tr>
                <th>${item.headline}</th>
                <td>${item.content}</td>
              </tr>
            `
          )
          //  반환 되는 건 배열인데 문자를 받고 싶으니까 join으로 문자화 시켜준다.
          .join("")}
      </table>
    `;
  }

  function renderTable(data: {
    caption: string;
    rows: {
      headline: string;
      content: string;
    }[];
  }): string {
    return [
      '<table class="table">',
      '<caption class="sr-only">' + data.caption + "</caption>",
      data.rows.reduce(function (htmlString, rowData) {
        const rowString = [
          "<tr>",
          "<th>" + rowData.headline + "</th>",
          "<td>" + rowData.content + "</td>",
          "</tr>",
        ].join("");
        return htmlString + rowString;
      }, ""),
      "</table>",
    ].join("");
  }

  run();
}
