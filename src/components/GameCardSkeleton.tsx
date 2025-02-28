import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

//creating Skeleton which is a placeholder for images

const GameCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
