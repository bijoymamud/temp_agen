import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CoreValue = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-8">Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Innovation", "Quality", "Developer Experience"].map((value) => (
          <Card key={value}>
            <CardHeader>
              <CardTitle>{value}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {`Our commitment to ${value.toLowerCase()} drives us every day as we work to provide the best web development templates and solutions.`}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CoreValue;
