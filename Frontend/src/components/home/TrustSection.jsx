import { trustFeatures } from "@/constants";

const TrustSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {trustFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
