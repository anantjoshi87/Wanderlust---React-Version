import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Camera, CheckCircle2, MapPin } from "lucide-react";
import React from "react";
import { useAuth } from "@/hooks/useAuth";

const ProfileHeaderCard = () => {
  const { user } = useAuth();

  return (
    <div>
      <Card className="overflow-hidden border-none shadow-sm">
        <div className="h-32 bg-linear-to-r from-primary/20 to-primary/5"></div>
        <CardContent className="p-6 sm:p-8 pt-0 relative">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-end -mt-12 mb-6">
            <div className="relative group cursor-pointer">
              {user.profilePhoto ? (
                <img
                  src={user.profile_image}
                  alt={user.username}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white shadow-md bg-white"
                />
              ) : (
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl border-4 border-white shadow-md bg-primary text-white flex items-center justify-center text-4xl sm:text-4xl font-bold">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Camera className="text-white w-8 h-8" />
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{user.username}</h2>
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground">@sarahj_travels</p>
              </div>

              <button className="bg-primary py-2 px-3 sm:py-3 sm:px-4 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition hover:bg-primary-hover whitespace-nowrap cursor-pointer">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Email</span>
              <span className="font-medium">{user.email}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Phone</span>
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Joined August 2023</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileHeaderCard;
