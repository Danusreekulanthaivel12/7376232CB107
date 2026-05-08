import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

export default function NotificationCard({
  notification,
  viewed
}) {

  const getColor = () => {

    switch (notification.Type) {

      case "Placement":
        return "success";

      case "Result":
        return "primary";

      default:
        return "warning";
    }
  };

  return (
    <Card
      sx={{
        mb: 2,
        opacity: viewed ? 0.6 : 1
      }}
    >
      <CardContent>

        <Chip
          label={notification.Type}
          color={getColor()}
          sx={{ mb: 1 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography variant="body2">
          {notification.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  );
}