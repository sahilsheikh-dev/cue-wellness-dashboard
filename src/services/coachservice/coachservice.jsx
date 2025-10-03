import { api } from "../http/apiClient";
const TOKEN_KEY = import.meta.env.VITE_STORAGE_TOKEN_KEY;

export const getAllCoaches = async () => {
  try {
    // Authorization handled by interceptor; presence of token ensures it’s set
    const response = await api.get("/coach/admin/list");
    const coachesArray = Array.isArray(response.data?.data)
      ? response.data.data
      : [];

    const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");

    return coachesArray.map((coach) => ({
      id: coach._id,
      name: cap(coach.name),
      mobile: coach.mobile,
      email: coach.email,
      address: coach.address,
      pincode: coach.pincode,
      status: cap(coach.status),
      createdAt: coach.createdAt
        ? new Date(coach.createdAt).toLocaleString()
        : "-",
      updatedAt: coach.updatedAt
        ? new Date(coach.updatedAt).toLocaleString()
        : "-",
      country: cap(coach.country),
      city: cap(coach.city),
      gender: cap(coach.gender),
      dob: coach.dob ? new Date(coach.dob).toLocaleDateString() : "-",
      token: coach.token || null,
      profilePicture: coach.profilePicture || null,
      isBlocked: coach.isBlocked || false,
      certificates: (coach.certificates || []).map((cert) => ({
        index: cert.index,
        path: cert.path,
      })),
      workAssets: (coach.workAssets || []).map((work) => ({
        type: work.type,
        path: work.path,
        index: work.index ?? 0,
        id: work._id || null,
      })),
      accepted_genders: (coach.accepted_genders || []).map(cap),
      accepted_languages: (coach.accepted_languages || []).map(cap),
      my_activities: (coach.my_activities || []).map(cap),
      my_connections: (coach.my_connections || []).map(cap),
      verified: coach.verified || false,
      mobileVerified: coach.mobileVerified || false,
      experience_since_date: coach.experience_since_date
        ? new Date(coach.experience_since_date).toLocaleDateString()
        : "-",
      story: coach.story || "-",
      agreement_terms: coach.agreement_terms || "-",
      agree_certification: coach.agree_certification || false,
      agree_experience: coach.agree_experience || false,
      agree_refund: coach.agree_refund || false,
      agree_privacy_policy: coach.agree_privacy_policy || false,
      agree_terms_conditions: coach.agree_terms_conditions || false,
      has_read_awareness_guideline: coach.has_read_awareness_guideline || false,
      has_read_connection_guideline:
        coach.has_read_connection_guideline || false,
      has_read_reflection_guideline:
        coach.has_read_reflection_guideline || false,
      has_read_journal_guideline: coach.has_read_journal_guideline || false,
      has_read_client_guideline: coach.has_read_client_guideline || false,
      has_read_coach_guideline: coach.has_read_coach_guideline || false,
      has_read_event_organizer_guideline:
        coach.has_read_event_organizer_guideline || false,
      has_read_product_company_guideline:
        coach.has_read_product_company_guideline || false,
      journal: coach.journal || [],
      saved_coaches: coach.saved_coaches || [],
      liked_activities: coach.liked_activities || [],
    }));
  } catch (e) {
    console.error("Error fetching coaches:", e);
    return [];
  }
};

export const changeCoachStatus = async (id, newStatus) => {
  const res = await api.put(`/coach/admin/change-status/${id}`, {
    status: newStatus,
  });
  return res.data;
};

export const changeCoachBlockStatus = async (id, isBlocked) => {
  const res = await api.put(`/coach/admin/is-block/${id}`, { isBlocked });
  return res.data;
};
