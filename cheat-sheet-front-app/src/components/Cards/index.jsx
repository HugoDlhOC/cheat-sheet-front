import Card from "../Card";
import {
  dataAnimation,
  dataBundler,
  dataCompression,
  dataColors,
  dataCssFrameworks,
  dataCssGenerator,
  dataFonts,
  dataIcons,
  dataDesignIdeas,
  dataSandbox,
  dataUi,
  dataGeneratorFramework,
  dataStock,
  dataHtmlTemplate,
  dataTesting,
  dataOther,
} from "../../data/data";

const Cards = () => {
  return (
    <div className="cards">
      <h2>Animations</h2>
      <section className="section-cards">
        {dataAnimation.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Bundlers</h2>
      <section className="section-cards">
        {dataBundler.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Compression</h2>
      <section className="section-cards">
        {dataCompression.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Couleurs</h2>
      <section className="section-cards">
        {dataColors.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Frameworks CSS</h2>
      <section className="section-cards">
        {dataCssFrameworks.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Générateurs CSS</h2>
      <section className="section-cards">
        {dataCssGenerator.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Polices</h2>
      <section className="section-cards">
        {dataFonts.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Icônes</h2>
      <section className="section-cards">
        {dataIcons.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Inspiration pour le design</h2>
      <section className="section-cards">
        {dataDesignIdeas.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Sandbox</h2>
      <section className="section-cards">
        {dataSandbox.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>UI</h2>
      <section className="section-cards">
        {dataUi.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Framework générateur web</h2>
      <section className="section-cards">
        {dataGeneratorFramework.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Stocks</h2>
      <section className="section-cards">
        {dataStock.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Templates HTML</h2>
      <section className="section-cards">
        {dataHtmlTemplate.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Testing</h2>
      <section className="section-cards">
        {dataTesting.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
      <h2>Autres</h2>
      <section className="section-cards">
        {dataOther.map((item) => (
          <Card
            imgSrc={item.srcImage}
            description={item.description}
            title={item.title}
            url={item.link}
          />
        ))}
      </section>
    </div>
  );
};

export default Cards;
