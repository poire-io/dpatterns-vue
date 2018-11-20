<template>
  <div class="row">
    <div class="col-12">
      <h1>Containers.</h1>
      <p>This is where you can come to see all containers. Containers are used to build web forms. You can use these containers and build robust pages.</p>
      <div class="row">
        <div class="col-12">
          <b-card title="Basic Card" title-tag="h2">
            <div class="row">
              <div class="col-3">
                <b-card title="Card Title"
                  tag="div">
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </b-card>
              </div>
            </div>
          </b-card>
          <b-card title="Card With Image and Action" title-tag="h2">
            <div class="row">
              <div class="col-3">
                <b-card title="Card Title"
                  img-src="https://via.placeholder.com/150x75"
                  img-alt="Image"
                  img-top
                  tag="div">
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <dpButton variant="primary">Primary Button</dpButton>
                </b-card>
              </div>
            </div>
          </b-card>
          <b-card title="Card In a Card Group" title-tag="h2">
            <div class="row">
              <div class="col"><br></div>
            </div>
            <div class="row">
              <div class="col-6">
                <b-card-group deck>
                  <b-card header="Card Header"
                    header-tag="header"
                    footer="Card Footer"
                    footer-tag="footer"
                    title="Card Title">
                    <p class="card-text">Header and footers using props.</p>
                    <dpButton variant="primary">Primary Button</dpButton>
                  </b-card>
                  <b-card header="Card Header"
                    header-tag="header"
                    footer="Card Footer"
                    footer-tag="footer"
                    title="Card Title">
                    <p class="card-text">Header and footers using props.</p>
                    <dpButton variant="primary">Primary Button</dpButton>
                  </b-card>
                </b-card-group>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
