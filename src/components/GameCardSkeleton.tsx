import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

//creating Skeleton which is a placeholder for images

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
