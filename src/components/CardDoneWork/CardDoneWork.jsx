const CardDoneWork = ({ item }) => {
  console.log("item", item);

  return (
    <li className="list_item_ourWorks">
      <div className="list_item_column_ourWorks">
        {/* <img className="list_item_img_ourWorks" src={OurWork1} /> */}
        <div className="list_item_title_ourWorks">
          Дом из кирпича <b>93 </b>кв.м. ПЧО, <b>3</b> спальни
        </div>
        <div className="list_item_box_price_ourWorks">
          <div className="list_item_left_price_ourWorks">
            Стоимость <br /> строительства от
          </div>
          <div>
            <b className="list_item_right_1_price_ourWorks">4190000</b>{" "}
            <span className="list_item_right_2_price_ourWorks">руб</span>
          </div>
        </div>
        <div className="list_item_box_price_ourWorks">
          <div className="list_item_left_price_ourWorks">Дата постройки</div>
          <div>
            <b className="list_item_right_1_price_ourWorks">13.09.2023</b>
          </div>
        </div>
        <button
        //   onClick={() => onButtonClick(PdfOurWork1)}
          className="list_item_download-documents_ourWorks"
        >
          Скачать документ
        </button>
      </div>
    </li>
  );
};

export default CardDoneWork;
