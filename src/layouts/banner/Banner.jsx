import React from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";

export default function banner() {
  return (
    <div>
      <Grid>
        <Grid.Row centered>
          <Segment basic>
            <Header as="h1" size="huge">
              <Header.Content>Futbol Blog</Header.Content>
              <Header.Subheader>Futbol ile ilgili her şey!</Header.Subheader>
              <Image
                centered
                src={
                  "https://image.shutterstock.com/image-photo/soccer-banner-background-260nw-1096516742.jpg"
                }
                style={{ width: "100%" }}
              />
            </Header>
          </Segment>
        </Grid.Row>
      </Grid>
    </div>
  );
}
